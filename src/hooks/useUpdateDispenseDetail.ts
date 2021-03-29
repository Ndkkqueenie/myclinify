import { useMutation } from "@apollo/client"
import { UPDATE_DISPENSE_DETAIL } from "dashboard-app/queries/medication"
import { useToasts } from "react-toast-notifications";

export default () => {
  const { addToast } = useToasts();
  const [updateDispense, { loading: updating }] = useMutation(UPDATE_DISPENSE_DETAIL);
};
