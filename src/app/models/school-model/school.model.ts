import {BadgeInformationModel} from '../badge-information-model/badge-information.model';

export declare class SchoolModel {
    id?: string;
    badgeInformationId?: string;
    nif?: string;
    name: string;
    shortName: string;
    address?: string;
    entrusted?: boolean;
    profilePhotoPath?: string;    
}