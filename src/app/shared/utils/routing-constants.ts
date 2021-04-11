export class Routes {

    private static BASE_URL = "api/v1/";

    // Academy routes
    static ARTICLE_CREATE_ROUTE = Routes.BASE_URL + "article/create";
    static ARTICLE_UPDATE_ROUTE = Routes.BASE_URL + "article/update/{articleId}";
    static ARTICLE_GET_ALL_ROUTE = Routes.BASE_URL + "article/getAll";
    static ARTICLE_GET_ROUTE = Routes.BASE_URL + "article/get/{articleId}";

    // User routes
    static USER_REGISTER_ROUTE = Routes.BASE_URL + "user/registration";
    static USER_LOGIN_ROUTE = Routes.BASE_URL + "user/login";

    // SchoolCourse routes
    static SCHOOL_COURSE_CREATE_ROUTE = Routes.BASE_URL + "schoolCourse/create";
    static SCHOOL_COURSE_GET_ALL_ROUTE = Routes.BASE_URL + "schoolCourse/getAll";

    // School routes
    static SCHOOL_CREATE_ROUTE = Routes.BASE_URL + "school/create";
    static SCHOOL_GET_ROUTE = Routes.BASE_URL + "school/get/{id}"
    static SCHOOL_GET_ALL_ROUTE = Routes.BASE_URL + "school/getAll";    

    // Manager routes
    static MANAGER_CREATE_ROUTE = Routes.BASE_URL + "manager/create";
    static MANAGER_GET_BY_USER_ROUTE = Routes.BASE_URL + "manager/getByUser/{userId}";

    // Academy routes
    static ACADEMY_CREATE_ROUTE = Routes.BASE_URL + "academy/create";
    static ACADEMY_GET_ALL_ROUTE = Routes.BASE_URL + "academy/getAll";
    static ACADEMY_GET_ROUTE = Routes.BASE_URL + "academy/get";

    // Course routes    
    static COURSE_CREATE_ROUTE = Routes.BASE_URL + "course/create";
    static COURSE_GET_BY_NAME_ROUTE = Routes.BASE_URL + "course/get";
    static COURSE_GET_ALL_ROUTE = Routes.BASE_URL + "course/getAll";

    // Course routes    
    static DISCIPLINE_CREATE_ROUTE = Routes.BASE_URL + "discipline/create";
    static DISCIPLINE_GET_ALL_ROUTE = Routes.BASE_URL + "discipline/getAll";

    // Teacher routes
    static TEACHER_CREATE_ROUTE = Routes.BASE_URL + "teacher/create";
    static TEACHER_GET_ROUTE = Routes.BASE_URL + "teacher/get";
    static TEACHER_GET_ALL_ROUTE = Routes.BASE_URL + "teacher/getAll";

    // Studant routes
    static STUDANT_CREATE_ROUTE = Routes.BASE_URL + "studant/create";
    static STUDANT_GET_ROUTE = Routes.BASE_URL + "studant/get";
    static STUDANT_GET_ALL_ROUTE = Routes.BASE_URL + "studant/getAll";

    // TeacherSchools routes
    static TEACHER_SCHOOLS_CREATE_ROUTE = Routes.BASE_URL + "teacherSchools/create";
    static TEACHER_SCHOOLS_UPDATE_ROUTE = Routes.BASE_URL + "teacherSchools/update/{teacherId}/{schoolId}";
    static TEACHER_SCHOOLS_GET_ALL_ROUTE = Routes.BASE_URL + "teacherSchools/getAll";
    static TEACHER_SCHOOLS_CHECK_TEACHER_HAS_SCHOOL_ROUTE = Routes.BASE_URL + "teacherSchools/checkTeacherHasSchool/{teacherId}";

    // TeacherPlace routes
    static TEACHER_PLACE_CREATE_ROUTE = Routes.BASE_URL + "teacherPlace/create";
    static TEACHER_PLACE_GET_ALL_ROUTE = Routes.BASE_URL + "teacherPlace/getAll";
    static TEACHER_PLACE_GET_ROUTE = Routes.BASE_URL + "teacherPlace/get/{teacherPlaceId}";

    // Video routes
    static VIDEO_UPLOAD_ROUTE = Routes.BASE_URL + "video/upload";

    // Video routes
    static IMAGE_UPLOAD_LESSON_PROFILE = Routes.BASE_URL + "image/upload/lesson/profile";

    // Lesson routes
    static LESSON_CREATE_ROUTE = Routes.BASE_URL + "lesson/create";
    static LESSON_GET_ALL_ROUTE = Routes.BASE_URL + "lesson/getAll";
    static LESSON_GET_ROUTE = Routes.BASE_URL + "lesson/get/{lessonId}";

    // TeacherPlace routes  
    static POST_CREATE_ROUTE = Routes.BASE_URL + "post/create";
    static POST_GET_ROUTE = Routes.BASE_URL + "post/get/{postId}";


    // Discipline topics routes
    static DISCIPLINE_TOPIC_CREATE_ROUTE = Routes.BASE_URL + "disciplineTopic/create";
    static DISCIPLINE_TOPIC_GET_ALL_ROUTE = Routes.BASE_URL + "disciplineTopic/getAll";

    // SignalR routes
    static VIDEO_UPLOAD_WATCH = Routes.BASE_URL + "video/upload/watch/{connectionId}";
}