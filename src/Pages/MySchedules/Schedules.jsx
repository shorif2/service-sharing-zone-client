
const Schedules = () => {
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
				<tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
					<td className="p-3">
						<p>97412378923</p>
					</td>
					<td className="p-3">
						<p>Microsoft Corporation</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="dark:text-gray-400">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="dark:text-gray-400">Tuesday</p>
					</td>
					<td className="p-3 text-right">
						<p>$15,792</p>
					</td>
					<td className="p-3 text-right">
						<span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                        <div className="flex justify-end">
                        
                        <select name="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option selected="">Pending</option>
                            <option value="In Progress">Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
						</span>
					</td>
				</tr>
				
				
			</tbody>
		</table>
	</div>
</div>
        </div>
        </div>
    );
};

export default Schedules;