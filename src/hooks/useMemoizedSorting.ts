import { useMemo } from "react";

const useMemoizedSorting = (sortedValues: any[], dependencies?: any) =>
  useMemo(() => sortedValues, [dependencies]);

export default useMemoizedSorting;
