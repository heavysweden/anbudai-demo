
import { Button } from "@/components/ui/button";
import { useFortnoxSync } from "@/hooks/useFortnoxSync";
import { toast } from "sonner";

export const SyncButton = () => {
  const { refetch, isFetching } = useFortnoxSync();

  const handleClick = async () => {
    const res = await refetch();
    if (res.isSuccess) {
      toast.success(`Synk klar · ${res.data.invoices.length} fakturor`);
    } else {
      toast.error("Kunde inte synka mot Fortnox");
    }
  };

  return (
    <Button onClick={handleClick} disabled={isFetching}>
      {isFetching ? "Synkar…" : "Synk Fortnox"}
    </Button>
  );
};
