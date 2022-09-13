export default function Footer(props) {
  return (
      <footer className='p-4 text-xl font-semibold text-center text-gray-700 bg-emerald-400'>
          <p>{props.stands} Locations World Wide</p>
      </footer>
  );
}