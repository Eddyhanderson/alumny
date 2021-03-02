import { DocumentLeave } from "src/app/shared/utils/constants";

export interface BottomSheetData{
    messages:{
        title:string,
        description?:string,
        action:DocumentLeave
    }[]
}