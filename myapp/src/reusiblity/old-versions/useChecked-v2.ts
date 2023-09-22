import { useEffect, useState } from 'react';
import { IdValue } from '../types';

type Params = {
  checkedIds?: IdValue[];
  onCheckedIdsChange?: (checkedIds: IdValue[]) => void;
};
export default function useChecked({ checkedIds, onCheckedIdsChange }: Params) {
  const [resolvedCheckedIds, setResolvedCheckedIds] = useState<IdValue[]>(checkedIds || []);
  useEffect(() => {
    const isControlled = checkedIds !== undefined;
    if (isControlled) {
      setResolvedCheckedIds(checkedIds);
    }
  }, [checkedIds]);

  const handleCheckChange = (checkedId: IdValue) => () => {
    const isChecked = resolvedCheckedIds.includes(checkedId);

    const newCheckedIds = isChecked
      ? resolvedCheckedIds.filter((itemCheckedid) => itemCheckedid !== checkedId)
      : resolvedCheckedIds.concat(checkedId);

    onCheckedIdsChange ? onCheckedIdsChange(newCheckedIds) : setResolvedCheckedIds(newCheckedIds);
  };
  return { handleCheckChange, resolvedCheckedIds };
}
