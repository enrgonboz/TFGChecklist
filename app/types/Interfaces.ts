export interface ChecklistsApiResponse {
  data: { data: ChecklistData[]; meta: Meta };
  status: number;
  statusText: string;
  headers: { [key: string]: string };
  config: {
    [key: string]: any;
  };
  request: {};
}

export interface Meta {
  totalCount: number;
  pageCount: number;
  currentPage: number;
  perPage: number;
}

export interface ChecklistData {
  id: number;
  attributes: ChecklistAttributes;
}

export interface ChecklistAttributes {
  Title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Shared: boolean;
  tasks: { data: TaskData[] };
  users: { data: UserData[] };
}

export interface TaskData {
  id: number;
  attributes: TaskAttributes;
}

export interface TaskAttributes {
  Name: string;
  Description: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface UserData {
  id: number;
  attributes: UserAttributes;
}

export interface UserAttributes {
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  Name: string | null;
  Surname: string | null;
}

export interface AddChecklistDialogProps {
  open: boolean;
  onClose: () => void;
  onAddChecklist: () => void; // Add this prop
}

export interface ChecklistData {
    id: number;
    attributes: ChecklistAttributes;
}

export interface ChecklistApiResponse {
  data: {
    data: {
      id: number;
      attributes: {
        Title: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        Shared: boolean;
        users: {
          data: any[]; // You can create a User interface if needed
        };
        tasks: {
          data: any[]; // You can create a Task interface if needed
        };
      };
    };
    meta: any; // You can create a Meta interface if needed
  };
  status: number;
  statusText: string;
  headers: {
    [key: string]: string;
  };
  config: {
    [key: string]: any;
  };
  request: any; // You can create a Request interface if needed
}
