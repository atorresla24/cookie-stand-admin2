export default function SignIn({ handleClick }) {
  return (
      <form onSubmit={handleClick} className='flex flex-col w-5/6 p-4 m-auto my-5 space-y-5 font-semibold text-center border-2 rounded-md border-emerald-400 bg-emerald-200'>
          <label className='flex flex-col mb-5 text-4xl font-bold'>USER NAME
              <input name='username' type='text'></input>
          </label>
          <label className='flex flex-col text-4xl font-bold'>PASSWORD
              <input name='password' type='text'></input>
          </label>
          <button type='submit' className='px-24 py-4 text-4xl rounded-md bg-emerald-500'>SIGN IN</button>
      </form>
  )
}