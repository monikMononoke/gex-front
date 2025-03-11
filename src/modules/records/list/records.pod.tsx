import React from 'react';
import { NavigationButton } from '#common/components';
import { useCreateRecordContext } from '#modules/records/core/providers';
import { Button } from '@mui/material';
import { CreateRecordPod } from '../create';

export const RecordsPod: React.FC = () => {
  const { onOpen } = useCreateRecordContext();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Button variant="contained" color="primary" onClick={onOpen}>
        Crear expediente
      </Button>
      <NavigationButton
        text="Editar expediente"
        path="/edit-record/$id"
        params={{
          id: '123456',
        }}
      />
      <CreateRecordPod />
    </div>
  );
};
