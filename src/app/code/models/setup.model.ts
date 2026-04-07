export interface SetupDataInterface {
    firstName: string;
    profileImage: string;
    initialSetup: boolean;
}

export interface SetupInterface {
    status: boolean;
    data: SetupDataInterface
}
