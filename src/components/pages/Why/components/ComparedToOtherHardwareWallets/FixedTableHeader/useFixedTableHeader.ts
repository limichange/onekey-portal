import { atom, useAtom } from 'jotai';

const fixedTableHeaderAtom = atom(false);

export function useFixedTableHeader() {
  const [visible, setVisible] = useAtom(fixedTableHeaderAtom);

  return {
    visible,
    setVisible,
  };
}
