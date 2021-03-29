import colors from 'dashboard-app/utils/colors';
import React from 'react';

export interface AllergyIconProps {
  color: string;
}

const AllergyIcon: React.FC<AllergyIconProps> = ({ color = colors.white }) => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.3082 8.2942L15.3478 8.64998H15.7057H17.6V9.34999H15.7058H15.3479L15.3083 9.70573C15.1722 10.9283 14.6872 12.0469 13.9544 12.9611L13.7299 13.2412L13.9842 13.4946L15.3245 14.8299L14.8304 15.3254L13.4876 13.9876L13.2345 13.7354L12.9554 13.9586C12.0419 14.6893 10.9262 15.1728 9.70593 15.3082L9.35002 15.3477V15.7057V17.6H8.65001V15.7065V15.3486L8.29428 15.309C7.07246 15.1729 5.95528 14.6887 5.04105 13.9566L4.76198 13.7331L4.5087 13.9854L3.16294 15.3262L2.66875 14.8306L4.01289 13.4908L4.26674 13.2378L4.04297 12.9578C3.31212 12.0434 2.82785 10.9268 2.6918 9.70573L2.65217 9.35002H2.29426H0.4V8.65001H2.29423H2.65215L2.69177 8.29429C2.82786 7.07248 3.31212 5.956 4.04359 5.04164L4.26723 4.76207L4.01408 4.50892L2.66792 3.16276L3.16276 2.66793L4.50888 4.01411L4.76204 4.26728L5.04161 4.04362C5.95597 3.31212 7.07244 2.82786 8.29425 2.6918L8.64998 2.65219V2.29426V0.4H9.34999V2.29426V2.65232L9.70587 2.69182C10.9253 2.82716 12.0412 3.31071 12.9549 4.04012L13.2344 4.26325L13.4873 4.01035L14.8305 2.66719L15.3253 3.16199L13.9829 4.50438L13.7296 4.75768L13.9535 5.03728C14.6864 5.95237 15.1721 7.07106 15.3082 8.2942ZM3.35001 9C3.35001 12.1151 5.88404 14.65 9 14.65C12.1152 14.65 14.65 12.1152 14.65 9C14.65 5.88407 12.1151 3.35001 9 3.35001C5.88411 3.35001 3.35001 5.88407 3.35001 9Z"
        fill={color}
        stroke={color}
      />
      <path
        d="M7.28201 6.96742C6.997 6.68994 6.502 6.68994 6.21702 6.96742C6.08202 7.10991 5.99951 7.30492 5.99951 7.49993C5.99951 7.69495 6.08202 7.88992 6.21702 8.03245C6.35951 8.16745 6.55452 8.24996 6.74954 8.24996C6.94455 8.24996 7.13952 8.16745 7.28205 8.03245C7.41705 7.88996 7.49956 7.69495 7.49956 7.49993C7.49949 7.30492 7.41701 7.10991 7.28201 6.96742Z"
        fill={color}
      />
      <path
        d="M11.9395 7.21495C11.902 7.12495 11.8495 7.04243 11.782 6.96745C11.602 6.79493 11.347 6.71995 11.0995 6.76495C11.0545 6.77243 11.0095 6.78745 10.9645 6.80995C10.9195 6.82496 10.8745 6.84746 10.8288 6.87745C10.7913 6.89995 10.7538 6.93746 10.717 6.96745C10.6495 7.04243 10.597 7.11746 10.5595 7.21495C10.522 7.30495 10.4995 7.40243 10.4995 7.49996C10.4995 7.59745 10.522 7.69497 10.5595 7.78497C10.597 7.88246 10.6495 7.96497 10.717 8.03247C10.7545 8.06246 10.792 8.09997 10.8288 8.12247C10.8745 8.15246 10.9188 8.17496 10.9645 8.18997C11.0095 8.21247 11.0545 8.22748 11.0995 8.23497C11.152 8.24246 11.2038 8.24998 11.2495 8.24998C11.4445 8.24998 11.6395 8.16747 11.782 8.03247C11.917 7.88998 11.9996 7.69497 11.9996 7.49996C11.9995 7.40243 11.977 7.30495 11.9395 7.21495Z"
        fill={color}
      />
      <path
        d="M10.2825 10.7175C10.2067 10.65 10.1325 10.5975 10.035 10.56C9.75751 10.4475 9.4275 10.5143 9.21751 10.7175C9.15001 10.7925 9.09752 10.8675 9.06001 10.965C9.0225 11.055 9 11.1525 9 11.25C9 11.4525 9.07499 11.64 9.21751 11.7825C9.36 11.9243 9.54752 12 9.75002 12C9.95252 12 10.14 11.9243 10.2825 11.7825C10.35 11.7068 10.4025 11.625 10.44 11.535C10.4775 11.445 10.5 11.3475 10.5 11.25C10.5 11.055 10.4175 10.8593 10.2825 10.7175Z"
        fill={color}
      />
    </svg>
  );
};

export default AllergyIcon;