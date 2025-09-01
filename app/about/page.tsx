export async function getServerSideProps() {
  // context এর মধ্যে থাকে query, params, req, res ইত্যাদি
  const res = await fetch(
    "https://explorerajasthantours.com/st_tour/delhi-goa-weekend-tour-package/"
  );
  const data = await res.json();
  console.log(data);

  return {
    props: {
      data, // এই data component এ props হিসেবে যাবে
    },
  };
}
