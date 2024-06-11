export default function Table({ data }) {
  const dummyData = [...data];
  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      {dummyData.map((el, index) => (
        <td key={index} className="px-6 py-4">
          {el}
        </td>
      ))}
    </tr>
  );
}
