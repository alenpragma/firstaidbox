const Orders = () => {
  // const [data, setData] = useState([]);
  const [order, setOrder] = useState([]);

  // useEffect(() => {
  //   fetch("https://mindchain.info/Ajax/allcoin_a/id/0?t=0.9988366169587606")
  //     .then((res) => res.json())
  //     .then((data) => setData(data?.url));
  // }, []);
  // // console.log(data);

  //  const numericalValues = [];

  // for (const key in data) {
  //   if (Array.isArray(data[key])) {
  //     numericalValues.push(
  //       ...data[key].filter((value) => typeof value === "number")
  //     );
  //   }
  // }
  // console.log(numericalValues);

  // https://firstaidbox-server.vercel.app/api/v1/orders
  return (
    <>
      <div className='flex justify-center items-center text-center'>
        <span className='text-3xl py-5 font-semibold text-gray-950'>
          Orders
        </span>
        <div>
          {order.map((o) => {
            return <div>name:{o.name}</div>;
          })}
        </div>
      </div>
    </>
  );
};

export default Orders;
