import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/filterSlice';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return (
    <div>
      <label>
        Find number by name:
        <input
          type="text"
          value={filter}
          onChange={e => dispatch(setFilter(e.target.value))}
        />
      </label>
    </div>
  );
}
export default Filter;
