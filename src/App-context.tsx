import { createContext, useState } from 'react';
import {
  AppContextDefaultValue,
  ContextProps,
  resultsItemType,
} from './types/types';

export const appContext = createContext<AppContextDefaultValue | null>(null);

const AppContext = (props: ContextProps) => {
  const [isDetailsLoading, setIsDetailsLoading] = useState(false);
  const [detailsContent, setIsDetailsContent] = useState<string[]>(['', '']);
  const [resultsItemInfo, setResultsItemInfo] = useState<resultsItemType>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [paginationCount, setPaginationCount] = useState<number>(0);

  const value = {
    isDetailsLoading,
    setIsDetailsLoading,
    detailsContent,
    setIsDetailsContent,
    resultsItemInfo,
    setResultsItemInfo,
    isLoading,
    setIsLoading,
    paginationCount,
    setPaginationCount,
  };

  return (
    <appContext.Provider value={value}>{props.children}</appContext.Provider>
  );
};

export default AppContext;
