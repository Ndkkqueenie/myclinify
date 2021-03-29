import React from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';

const StyledMapper = styled.div`
  width: 100%;
  height: 50px;
  color: ${colors.black};
`;

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
