import Button from "@/ui/Button";

type Props = {
  onPress: () => void;
  status: "WORKING" | "ONHOLD" | "READY" | "DONE";
};

export default function TimerButton({ onPress, status }: Props) {
  return (
    <Button onPress={onPress}>
      {status === "ONHOLD" && "resume"}
      {status === "READY" && "start"}
    </Button>
  );
}
