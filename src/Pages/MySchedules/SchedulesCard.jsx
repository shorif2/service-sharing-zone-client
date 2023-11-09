

const SchedulesCard = ({booked}) => {

    const {date, price} = booked;
    return (
        <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
					<td className="p-3">
						<p>97412378923</p>
					</td>
					<td className="p-3">
						<p>Microsoft Corporation</p>
					</td>
					<td className="p-3">
						<p>{date}</p>
						
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
					</td>
					<td className="p-3 text-right">
						<p>${price}</p>
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
    );
};

export default SchedulesCard;