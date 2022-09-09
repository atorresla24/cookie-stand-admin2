export default function CreateForm(props) {
  return (
      <form onSubmit={props.onSubmit} className='w-2/3 p-4 space-y-5 font-semibold text-center rounded-md bg-emerald-300'>
          <legend className='text-2xl'>Create Cookie Stand</legend>
          <div className='text-center'>
              <label className='flex w-full'> Location
                  <input name='location' type='text' className='w-full ml-2' placeholder='Store location...'></input>
              </label>
          </div>
          <div className='flex flex-auto space-x-2'>
              <label className='flex flex-col w-full p-2 rounded-md bg-emerald-200'> Minimum Customers per Hour
                  <input name='min' type='text' placeholder='0'></input>
              </label>
              <label className='flex flex-col w-full p-2 rounded-md bg-emerald-200'> Maximum Customers per Hour
                  <input name='max' type='text' placeholder='0'></input>
              </label>
              <label className='flex flex-col w-full p-2 rounded-md bg-emerald-200'> Average Cookies per Sale
                  <input name='avg' type='text' placeholder='0'></input>
              </label>
              <button type='submit' className='px-24 py-4 rounded-md bg-emerald-500'>Create</button>
          </div>
      </form>
  );
}