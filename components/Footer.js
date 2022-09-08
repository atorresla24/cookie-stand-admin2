export default function Footer(props) {
  return (
      <footer className='p-4 text-lg font-semibold text-gray-700 bg-emerald-500'>
          <p>{props.stands} Locations </p>
      </footer>
  );
}