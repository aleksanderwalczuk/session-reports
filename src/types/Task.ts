export type Task = {
  category: {
    status: string;
    id: string;
    title: string;
    hex_color: string;
  };
  start_date: string;
  duration_second: number;
  title: string;
  notes: string;
  pause_second: number;
  meta: any[]; // You can replace 'any' with a more specific type if needed
  type: string;
  end_date: string;
};
