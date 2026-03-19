import Button from "@/ui/Button";

type Props = {
  children: React.ReactNode;
  handleBackBtnPress: () => void;
};

export default function BackBtn({ children, handleBackBtnPress }: Props) {
  return (
    <Button onPress={handleBackBtnPress} type="small">
      {children}
    </Button>
  );
}
