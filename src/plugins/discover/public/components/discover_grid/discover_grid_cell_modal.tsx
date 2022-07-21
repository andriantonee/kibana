import {
  EuiModal,
  EuiModalBody,
  EuiCodeBlock,
} from '@elastic/eui';
import React, { createContext, useState, ReactNode } from 'react';

export interface DiscoverGridCellModalContextShape {
  modalIsOpen: boolean;
  setModalIsOpen: (isOpen: boolean) => void,
  setModalContent: (content: string) => void,
};

export const DiscoverGridCellModalContext = createContext<
  DiscoverGridCellModalContextShape
>({
  modalIsOpen: false,
  setModalIsOpen: () => {},
  setModalContent: () => {},
});

export const useCellModal = (): {
  cellModalContext: DiscoverGridCellModalContextShape,
  cellModal: ReactNode,
} => {
  // Current open state are handled here
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Modal content are passed by individual `EuiDataGridCell`
  const [modalContent, setModalContent] = useState('');

  const closeCellModal = () => { setModalIsOpen(false) }

  const cellModalContext = {
    modalIsOpen,
    setModalIsOpen,
    setModalContent,
  };

  const cellModal = modalIsOpen && (
    <EuiModal onClose={closeCellModal}>
      <EuiModalBody className="dscDiscoverGrid__cellModalBody">
        <EuiCodeBlock language="html" paddingSize='s' isCopyable overflowHeight={400}>
          {modalContent}
        </EuiCodeBlock>
      </EuiModalBody>
    </EuiModal>
  );

  return { cellModalContext, cellModal }
};
