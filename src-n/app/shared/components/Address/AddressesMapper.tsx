import React from 'react';
import { StyledMapper } from '../styled-components/StyledMapper';

interface AddressProps {
  address: any;
  onSelect: any;
}

const Address: React.FC<AddressProps> = ({ address, onSelect }) => (
  <StyledMapper onClick={() => onSelect(address)}>{address}</StyledMapper>
);

interface AddressesMapperProps {
  addresses: any;
  onSelect: any;
}

export const AddressesMapper: React.FC<AddressesMapperProps> = ({ addresses, onSelect }) => (
  <div>
    {addresses.map((address: string) => (
      <Address address={address} onSelect={onSelect} />
    ))}
  </div>
);

export default AddressesMapper;
