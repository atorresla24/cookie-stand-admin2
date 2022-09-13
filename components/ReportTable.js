export default function ReportTable({ stands }) {
    const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

    if (stands.length === 0) {
        return <h2 className="text-2xl">No Cookie Stands Available</h2>
    } else {
        return (
            <table className='w-5/6 border-2 bg-emerald-400 border-emerald-500'>
                <thead>
                    <tr>
                        <th className="px-1 text-left border-2 border-emerald-500">Location</th>
                        {hours.map(hour => <th className="px-1 text-left border-2 border-emerald-500">{hour}</th>)}
                        <th className="px-1 text-left border-2 border-emerald-500">Totals</th>
                    </tr>
                </thead>
                <tbody className='border-2 border-emerald-500'>
                    {stands.map(stand => (
                        <tr key={stand.id} className='odd:bg-emerald-200 even:bg-emerald-300 '>
                            <td className='pl-4 font-bold border-2 border-emerald-500'>{stand.location}</td>
                            {stand.hourlySales.map(sales => <td className='px-2 text-right border-2 border-emerald-500'>{sales}</td>)}
                            <td className='px-2 text-right border-2 border-emerald-500'>516</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot className='border-2 border-emerald-500'>
                    <tr className='border-2 border-emerald-500'>
                        <td className="px-1 font-bold">Totals</td>
                        {stands[0].hourlySales.map(sales => <td className='px-2 text-right border-2 border-emerald-500'>{sales * stands.length}</td>)}
                        <td className="px-2 text-right">{516 * stands.length}</td>
                    </tr>
                </tfoot>
            </table>
        )
    }
}