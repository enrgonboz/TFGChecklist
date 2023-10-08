export interface ChecklistDataMockup {
    Id: number;
    Name: string;
    Description: string | null;
    Tasks: TaskDataMockup[];
    Users: UserDataMockup[];
}

export interface TaskDataMockup {
    Id: number;
    Name: string;
    Description: string | null;
    Completed: boolean;
}

export interface UserDataMockup {
    Id: number;
    Email: string;
}