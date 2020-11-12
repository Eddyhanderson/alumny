export class Routes {

    private static BASE_URL = "api/v1/";


    // User routes
    static USER_REGISTER_ROUTE = Routes.BASE_URL + "user/registration";
    static USER_LOGIN_ROUTE = Routes.BASE_URL + "user/login";

    // School routes
    static SCHOOL_CREATE_ROUTE = Routes.BASE_URL + "school/create";
    static SCHOOL_GET_ALL_ROUTE = Routes.BASE_URL + "school/getAll";

    // Manager routes
    static MANAGER_CREATE_ROUTE = Routes.BASE_URL + "manager/create";
    static MANAGER_GET_BY_USER_ROUTE = Routes.BASE_URL + "manager/getByUser/{userId}";

    // Academy routes
    static ACADEMY_CREATE_ROUTE = Routes.BASE_URL + "academy/create";
    static ACADEMY_GET_BY_NAME_ROUTE = Routes.BASE_URL + "academy/getByName/{name}";

    // Course routes    
    static COURSE_CREATE_ROUTE = Routes.BASE_URL + "course/create";
    static COURSE_GET_BY_NAME_ROUTE = Routes.BASE_URL + "course/getByName/{name}";

    // Teacher routes
    static TEACHER_CREATE_ROUTE = Routes.BASE_URL + "teacher/create";
    static TEACHER_GET_ROUTE = Routes.BASE_URL + "teacher/get/{teacherId}";
    static TEACHER_GET_BY_USER_ROUTE = Routes.BASE_URL + "teacher/getByUser/{userId}";

    // TeacherSchools routes
    static TEACHER_SCHOOLS_CREATE_ROUTE = Routes.BASE_URL + "teacherSchools/create";
    static TEACHER_SCHOOLS_GET_ALL_PENDING_BY_TEACHER_ROUTE = Routes.BASE_URL + "teacherSchools/getAllByTeacher/pending/{teacherId}";
    static TEACHER_SCHOOLS_GET_ALL_PENDING_BY_SCHOOL_ROUTE = Routes.BASE_URL + "teacherSchools/getAllBySchool/pending/{schoolId}";
    static TEACHER_SCHOOLS_GET_ALL_NORMAL_BY_SCHOOL_ROUTE = Routes.BASE_URL + "teacherSchools/getAllBySchool/normal/{schoolId}";
    static TEACHER_SCHOOLS_GET_ALL_NORMAL_BY_TEACHER_ROUTE = Routes.BASE_URL + "teacherSchools/getAllByTeacher/normal/{teacherId}";
    static TEACHER_SCHOOLS_GET_ALL_NOTCONTAINED_ROUTE = Routes.BASE_URL + "teacherSchools/getAll/notContained/{teacherId}";
}