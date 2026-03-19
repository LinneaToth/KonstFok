import Button from "@/ui/Button";
import { Status } from "@/types/types";

type Props = {
  onPress: () => void;
  status: Status;
};

export default function TimerButton({ onPress, status }: Props) {
  return (
    <Button onPress={onPress}>
      {status === "ONHOLD" && "resume"}
      {status === "READY" && "start"}
    </Button>
  );
}
