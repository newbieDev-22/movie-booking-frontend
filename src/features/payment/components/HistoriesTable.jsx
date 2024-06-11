import { useState } from "react";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import Table from "../../../components/Table";
import Ticket from "../../../components/Ticket";

export default function HistoriesTable() {
  const [isTicketOpen, setIsTicketOpen] = useState(false);

  const data = [
    101,
    "Spider-Man: Across the Spider-Verse",
    "A",
    "JUN 10 | 10:00-12:00",
    "A11, A12",
    "Success",
    <Button color="white" onClick={() => setIsTicketOpen(true)}>
      E-ticket
    </Button>,
  ];

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
        <table className="w-full text-sm text-right rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="text-lg">
              <th scope="col" className="px-6 py-3">
                Booking Id
              </th>
              <th scope="col" className="px-6 py-3">
                Movie Name
              </th>
              <th scope="col" className="px-6 py-3">
                Theater
              </th>
              <th scope="col" className="px-6 py-3">
                Showtime
              </th>
              <th scope="col" className="px-6 py-3">
                Seats
              </th>
              <th scope="col" className="px-6 py-3">
                Payment Status
              </th>
              <th scope="col" className="px-6 py-3">
                E-ticket
              </th>
            </tr>
          </thead>
          <tbody className="text-lg text-right">
            <Table data={data} />
            <Table data={data} />
            <Table data={data} />
            <Table data={data} />
            <Table data={data} />
            <Table data={data} />
            <Table data={data} />
            <Table data={data} />
            <Table data={data} />
            <Table data={data} />
            <Table data={data} />
            <Table data={data} />
          </tbody>
        </table>
      </div>
      <Modal
        title="Ticket"
        open={isTicketOpen}
        onClose={() => setIsTicketOpen(false)}
        width={45}
      >
        <Ticket />
      </Modal>
    </>
  );
}
