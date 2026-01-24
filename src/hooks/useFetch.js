import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // كود جلب البيانات
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Erreur de récupération des données");
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]); // كيتعاود غير إلا تبدل الـ URL

  return { data, loading, error }; // إرجاع النتائج المطلوبة
};

export default useFetch;