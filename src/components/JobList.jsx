import { useDispatch, useSelector } from "react-redux";
import { addFilter } from "store/filters/filters-actions";
import { selectFilters } from "store/filters/filters-selectors";
import { selectVisiblePositions } from "store/positions/position-selectors";
import { JobPosition } from "./JobPosition";

const JobList = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters);
  const positions = useSelector((state) =>
    selectVisiblePositions(state, currentFilters)
  );

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };
  return (
    <div className="job-list">
      {positions.map((item) => (
        <JobPosition
          key={item.id}
          handleAddFilter={handleAddFilter}
          {...item}
        />
      ))}
    </div>
  );
};

export { JobList };
