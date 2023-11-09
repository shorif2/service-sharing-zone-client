import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";
import SchedulesCard from "./SchedulesCard";

const Schedules = () => {

	const {booking} = useContext(AuthContext)

	
    return (
        <div>
            
            <h2 className="text-2xl font-medium text-center">My Schedules</h2>
        <div>
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
	<h2 className="mb-4 text-2xl font-semibold leadi">Invoices</h2>
	<div className="overflow-x-auto">
		<table className="min-w-full text-xs">
			{/* <colgroup>
				<col>
				<col>
				<col>
				<col>
				<col>
				<col className="w-24">
			</colgroup> */}
			<thead className="bg-red-500 text-white">
				<tr className="text-left">
					<th className="p-3">Service</th>
					<th className="p-3">Client</th>
					<th className="p-3">Issued</th>
					<th className="p-3">Due</th>
					<th className="p-3 text-right">Amount</th>
					<th className="p-3 text-right">Status</th>
				</tr>
			</thead>
			<tbody>
				{
					booking.map(booked => <SchedulesCard key={booked._id} booked={booked} ></SchedulesCard>)
				}
				
				
			</tbody>
		</table>
	</div>
</div>
        </div>
        </div>
    );
};

export default Schedules;