import useFetch from '../api/useFetch'
const UserSelector = () => {
  const { isPanging, data, error } = useFetch('/client/all')

  return (
    <div>

    </div>
  );
}

export default UserSelector;
