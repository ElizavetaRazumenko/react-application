import { createContext, useState } from 'react';
import {
  AppContextDefaultValue,
  ContextProps,
  resultsItemType,
} from './types/types';

export const appContext = createContext<AppContextDefaultValue | null>(null);

const AppContext = (props: ContextProps) => {
  const [isDetailsLoading, setIsDetailsLoading] = useState(false);
  const [detailsContent, setDetailsContent] = useState<string[]>(['', '']);
  const [resultsItemInfo, setResultsItemInfo] = useState<resultsItemType>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [paginationCount, setPaginationCount] = useState<number>(0);
  const [searchInputValue, setSearchInputValue] = useState<string>(
    localStorage.getItem('Input value') || ''
  );

  const value = {
    isDetailsLoading,
    setIsDetailsLoading,
    detailsContent,
    setDetailsContent,
    resultsItemInfo,
    setResultsItemInfo,
    isLoading,
    setIsLoading,
    paginationCount,
    setPaginationCount,
    searchInputValue,
    setSearchInputValue,
  };

  return (
    <appContext.Provider value={value}>{props.children}</appContext.Provider>
  );
};

export default AppContext;
