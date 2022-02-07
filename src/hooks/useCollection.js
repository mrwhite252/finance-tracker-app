import { useEffect, useState } from "react";

import { projectFirestore } from "../firebase/config";

export const useCollection = (colllection) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ref = projectFirestore.collection(colllection);

    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });

        // update state

        setDocuments(results);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError("could not fetch the data");

        // unsubscribe on unmount

        return () => unsubscribe();
      }
    );
  }, [colllection]);

  return { documents, error };
};
