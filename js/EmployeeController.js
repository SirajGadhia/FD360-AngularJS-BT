
FD360.controller('EmployeeController', ['$scope', 
function ($scope) {
           debugger;
            $scope.finish_count = 0;
            $scope.is_finished_all=false;
            $scope.is_not_strat = true;
            $scope.course_count=0;
            $scope.employees;
            $scope.courses;
            $scope.is_all_pending = '';
            $scope.is_all_completed = '';
            $scope.seach_all = 'Search all Employees';

       
            function getEmployees() {
                var employees = $scope.employeesData;
                      for (var i = 0; i < employees.length; i++) {
                          employees[i].isAllPending = true;
                          employees[i].isAllCompleted = true;
                          employees[i].order = 'Code';
                          employees[i].reverse = '';
                          for (var j = 0; j < employees[i].EmployeeCourses.length; j++) {

                              if (employees[i].EmployeeCourses[j].isComplete)
                              {
                                  employees[i].isAllPending = false;
                              }else {
                                  employees[i].isAllCompleted = false;
                              }

                              for (var k = 0; k < $scope.courses.length; k++) {
                                  if( $scope.courses[k].CourseID == employees[i].EmployeeCourses[j].CourseID ){
                                      employees[i].EmployeeCourses[j].Name = $scope.courses[k].Name;
                                      employees[i].EmployeeCourses[j].Code = $scope.courses[k].Code;
                                      break;
                                  }
                              }

                          }
                        }

                      $scope.employees = employees;

            }

            function getCourses() {
                $scope.courses = $scope.coursesData;
            }

            $scope.toggleShowCourses = function () {
                this.employee.isNotShowCourses = !this.employee.isNotShowCourses;
            }

            $scope.changeComplete=function()
            {
                this.Course.isComplete = !this.Course.isComplete;
            }

            $scope.searchCleare = function () {
                $scope.serch.Name = '';
            }

           $scope.coursesData = [
  {
      "$id": "1",
      "CourseID": 1,
      "Name": "Online Inventory Managment System",
      "Code": "OIMS",
      "Description": "Online Inventory Managment System",
      "EmployeeCourses": [],
      "isSelect": false,
      "isDisable": false
  },
  {
      "$id": "2",
      "CourseID": 2,
      "Name": "Fundamentals of Supply & Demand Logistics",
      "Code": "FSDL",
      "Description": "Fundamentals of supply and demand logistics",
      "EmployeeCourses": [],
      "isSelect": false,
      "isDisable": false
  },
  {
      "$id": "3",
      "CourseID": 3,
      "Name": "Call Center Management Process ",
      "Code": "CCMP",
      "Description": "Call Center Management Process ",
      "EmployeeCourses": [],
      "isSelect": false,
      "isDisable": false
  },
  {
      "$id": "4",
      "CourseID": 4,
      "Name": "Refund Process Admin System",
      "Code": "RPAS",
      "Description": "Refund Process Admin System",
      "EmployeeCourses": [],
      "isSelect": false,
      "isDisable": false
  },
  {
      "$id": "5",
      "CourseID": 5,
      "Name": "Fundamentals of Inventory Management",
      "Code": "FIMN",
      "Description": "Fundamentals of inventory management",
      "EmployeeCourses": [],
      "isSelect": false,
      "isDisable": false
  },
  {
      "$id": "6",
      "CourseID": 6,
      "Name": "Product & Product Code Familiarization",
      "Code": "PPCF",
      "Description": "Product & Product Code Familiarization",
      "EmployeeCourses": [],
      "isSelect": false,
      "isDisable": false
  }
]



            $scope.employeesData =
[
{
    "$id": "1",
    "EmployeeID": 1,
    "HireDate": "1999-12-12T00:00:00",
    "Name": "Siraj Gadhia",
    "EmployeeCourses": [
      {
          "$id": "2",
          "EmployeeCourseID": 168,
          "EmployeeID": 1,
          "CourseID": 1,
          "isComplete": true,
          "Course": null,
          "Employee": {
              "$ref": "1"
          }
      },
      {
          "$id": "3",
          "EmployeeCourseID": 169,
          "EmployeeID": 1,
          "CourseID": 2,
          "isComplete": false,
          "Course": null,
          "Employee": {
              "$ref": "1"
          }
      },
      {
          "$id": "4",
          "EmployeeCourseID": 170,
          "EmployeeID": 1,
          "CourseID": 3,
          "isComplete": false,
          "Course": null,
          "Employee": {
              "$ref": "1"
          }
      },
      {
          "$id": "5",
          "EmployeeCourseID": 171,
          "EmployeeID": 1,
          "CourseID": 5,
          "isComplete": true,
          "Course": null,
          "Employee": {
              "$ref": "1"
          }
      }
    ],
    "isShowCourses": false
},
{
    "$id": "6",
    "EmployeeID": 2,
    "HireDate": "2004-12-12T00:00:00",
    "Name": "Amitkumar Patel",
    "EmployeeCourses": [
      {
          "$id": "7",
          "EmployeeCourseID": 5,
          "EmployeeID": 2,
          "CourseID": 1,
          "isComplete": true,
          "Course": null,
          "Employee": {
              "$ref": "6"
          }
      },
      {
          "$id": "8",
          "EmployeeCourseID": 6,
          "EmployeeID": 2,
          "CourseID": 2,
          "isComplete": true,
          "Course": null,
          "Employee": {
              "$ref": "6"
          }
      },
      {
          "$id": "9",
          "EmployeeCourseID": 7,
          "EmployeeID": 2,
          "CourseID": 3,
          "isComplete": true,
          "Course": null,
          "Employee": {
              "$ref": "6"
          }
      },
      {
          "$id": "10",
          "EmployeeCourseID": 8,
          "EmployeeID": 2,
          "CourseID": 4,
          "isComplete": true,
          "Course": null,
          "Employee": {
              "$ref": "6"
          }
      }
    ],
    "isShowCourses": false
},
{
    "$id": "11",
    "EmployeeID": 3,
    "HireDate": "2009-12-12T00:00:00",
    "Name": "Zach Werde",
    "EmployeeCourses": [
      {
          "$id": "12",
          "EmployeeCourseID": 9,
          "EmployeeID": 3,
          "CourseID": 1,
          "isComplete": false,
          "Course": null,
          "Employee": {
              "$ref": "11"
          }
      },
      {
          "$id": "13",
          "EmployeeCourseID": 10,
          "EmployeeID": 3,
          "CourseID": 2,
          "isComplete": false,
          "Course": null,
          "Employee": {
              "$ref": "11"
          }
      },
      {
          "$id": "14",
          "EmployeeCourseID": 11,
          "EmployeeID": 3,
          "CourseID": 3,
          "isComplete": false,
          "Course": null,
          "Employee": {
              "$ref": "11"
          }
      },
      {
          "$id": "15",
          "EmployeeCourseID": 12,
          "EmployeeID": 3,
          "CourseID": 4,
          "isComplete": false,
          "Course": null,
          "Employee": {
              "$ref": "11"
          }
      }
    ],
    "isShowCourses": false
},
{
    "$id": "26",
    "EmployeeID": 14,
    "HireDate": "2013-12-15T00:00:00",
    "Name": "Danny Keegan",
    "EmployeeCourses": [
      {
          "$id": "27",
          "EmployeeCourseID": 25,
          "EmployeeID": 14,
          "CourseID": 2,
          "isComplete": false,
          "Course": null,
          "Employee": {
              "$ref": "26"
          }
      },
      {
          "$id": "28",
          "EmployeeCourseID": 26,
          "EmployeeID": 14,
          "CourseID": 4,
          "isComplete": false,
          "Course": null,
          "Employee": {
              "$ref": "26"
          }
      },
      {
          "$id": "29",
          "EmployeeCourseID": 27,
          "EmployeeID": 14,
          "CourseID": 5,
          "isComplete": true,
          "Course": null,
          "Employee": {
              "$ref": "26"
          }
      },
      {
          "$id": "30",
          "EmployeeCourseID": 28,
          "EmployeeID": 14,
          "CourseID": 6,
          "isComplete": false,
          "Course": null,
          "Employee": {
              "$ref": "26"
          }
      }
    ],
    "isShowCourses": false
},
{
    "$id": "31",
    "EmployeeID": 15,
    "HireDate": "2013-12-15T00:00:00",
    "Name": "Rodney Lewis",
    "EmployeeCourses": [
      {
          "$id": "32",
          "EmployeeCourseID": 29,
          "EmployeeID": 15,
          "CourseID": 1,
          "isComplete": false,
          "Course": null,
          "Employee": {
              "$ref": "31"
          }
      },
      {
          "$id": "33",
          "EmployeeCourseID": 30,
          "EmployeeID": 15,
          "CourseID": 2,
          "isComplete": false,
          "Course": null,
          "Employee": {
              "$ref": "31"
          }
      },
      {
          "$id": "34",
          "EmployeeCourseID": 31,
          "EmployeeID": 15,
          "CourseID": 5,
          "isComplete": false,
          "Course": null,
          "Employee": {
              "$ref": "31"
          }
      },
      {
          "$id": "35",
          "EmployeeCourseID": 32,
          "EmployeeID": 15,
          "CourseID": 6,
          "isComplete": true,
          "Course": null,
          "Employee": {
              "$ref": "31"
          }
      }
    ],
    "isShowCourses": false
},
{
    "$id": "36",
    "EmployeeID": 16,
    "HireDate": "2013-12-15T00:00:00",
    "Name": "Adrian Dilley",
    "EmployeeCourses": [
      {
          "$id": "37",
          "EmployeeCourseID": 33,
          "EmployeeID": 16,
          "CourseID": 2,
          "isComplete": false,
          "Course": null,
          "Employee": {
              "$ref": "36"
          }
      },
      {
          "$id": "38",
          "EmployeeCourseID": 34,
          "EmployeeID": 16,
          "CourseID": 3,
          "isComplete": false,
          "Course": null,
          "Employee": {
              "$ref": "36"
          }
      },
      {
          "$id": "39",
          "EmployeeCourseID": 35,
          "EmployeeID": 16,
          "CourseID": 4,
          "isComplete": false,
          "Course": null,
          "Employee": {
              "$ref": "36"
          }
      },
      {
          "$id": "40",
          "EmployeeCourseID": 36,
          "EmployeeID": 16,
          "CourseID": 5,
          "isComplete": true,
          "Course": null,
          "Employee": {
              "$ref": "36"
          }
      }
    ],
    "isShowCourses": false
},
{
    "$id": "41",
    "EmployeeID": 17,
    "HireDate": "2013-12-15T00:00:00",
    "Name": "Robert Reyes",
    "EmployeeCourses": [
      {
          "$id": "42",
          "EmployeeCourseID": 37,
          "EmployeeID": 17,
          "CourseID": 1,
          "isComplete": true,
          "Course": null,
          "Employee": {
              "$ref": "41"
          }
      },
      {
          "$id": "43",
          "EmployeeCourseID": 38,
          "EmployeeID": 17,
          "CourseID": 3,
          "isComplete": false,
          "Course": null,
          "Employee": {
              "$ref": "41"
          }
      },
      {
          "$id": "44",
          "EmployeeCourseID": 39,
          "EmployeeID": 17,
          "CourseID": 4,
          "isComplete": false,
          "Course": null,
          "Employee": {
              "$ref": "41"
          }
      },
      {
          "$id": "45",
          "EmployeeCourseID": 40,
          "EmployeeID": 17,
          "CourseID": 5,
          "isComplete": false,
          "Course": null,
          "Employee": {
              "$ref": "41"
          }
      }
    ],
    "isShowCourses": false
},
{
    "$id": "46",
    "EmployeeID": 18,
    "HireDate": "2013-12-15T00:00:00",
    "Name": "Stephanie Reese",
    "EmployeeCourses": [
      {
          "$id": "47",
          "EmployeeCourseID": 41,
          "EmployeeID": 18,
          "CourseID": 1,
          "isComplete": false,
          "Course": null,
          "Employee": {
              "$ref": "46"
          }
      },
      {
          "$id": "48",
          "EmployeeCourseID": 42,
          "EmployeeID": 18,
          "CourseID": 3,
          "isComplete": true,
          "Course": null,
          "Employee": {
              "$ref": "46"
          }
      },
      {
          "$id": "49",
          "EmployeeCourseID": 43,
          "EmployeeID": 18,
          "CourseID": 4,
          "isComplete": true,
          "Course": null,
          "Employee": {
              "$ref": "46"
          }
      },
      {
          "$id": "50",
          "EmployeeCourseID": 44,
          "EmployeeID": 18,
          "CourseID": 6,
          "isComplete": false,
          "Course": null,
          "Employee": {
              "$ref": "46"
          }
      }
    ],
    "isShowCourses": false
},
{
    "$id": "51",
    "EmployeeID": 19,
    "HireDate": "2013-12-15T00:00:00",
    "Name": "Robert Manon",
    "EmployeeCourses": [
      {
          "$id": "52",
          "EmployeeCourseID": 45,
          "EmployeeID": 19,
          "CourseID": 1,
          "isComplete": false,
          "Course": null,
          "Employee": {
              "$ref": "51"
          }
      },
      {
          "$id": "53",
          "EmployeeCourseID": 46,
          "EmployeeID": 19,
          "CourseID": 3,
          "isComplete": true,
          "Course": null,
          "Employee": {
              "$ref": "51"
          }
      },
      {
          "$id": "54",
          "EmployeeCourseID": 47,
          "EmployeeID": 19,
          "CourseID": 4,
          "isComplete": false,
          "Course": null,
          "Employee": {
              "$ref": "51"
          }
      },
      {
          "$id": "55",
          "EmployeeCourseID": 48,
          "EmployeeID": 19,
          "CourseID": 6,
          "isComplete": false,
          "Course": null,
          "Employee": {
              "$ref": "51"
          }
      }
    ],
    "isShowCourses": false
},
{
    "$id": "56",
    "EmployeeID": 20,
    "HireDate": "2013-12-15T00:00:00",
    "Name": "Mary Parsons",
    "EmployeeCourses": [
      {
          "$id": "57",
          "EmployeeCourseID": 49,
          "EmployeeID": 20,
          "CourseID": 2,
          "isComplete": false,
          "Course": null,
          "Employee": {
              "$ref": "56"
          }
      },
      {
          "$id": "58",
          "EmployeeCourseID": 50,
          "EmployeeID": 20,
          "CourseID": 3,
          "isComplete": true,
          "Course": null,
          "Employee": {
              "$ref": "56"
          }
      },
      {
          "$id": "59",
          "EmployeeCourseID": 51,
          "EmployeeID": 20,
          "CourseID": 4,
          "isComplete": true,
          "Course": null,
          "Employee": {
              "$ref": "56"
          }
      },
      {
          "$id": "60",
          "EmployeeCourseID": 52,
          "EmployeeID": 20,
          "CourseID": 6,
          "isComplete": true,
          "Course": null,
          "Employee": {
              "$ref": "56"
          }
      }
    ],
    "isShowCourses": false
},
{
    "$id": "61",
    "EmployeeID": 21,
    "HireDate": "2013-12-15T00:00:00",
    "Name": "Audrey Amanda",
    "EmployeeCourses": [
      {
          "$id": "62",
          "EmployeeCourseID": 53,
          "EmployeeID": 21,
          "CourseID": 1,
          "isComplete": false,
          "Course": null,
          "Employee": {
              "$ref": "61"
          }
      },
      {
          "$id": "63",
          "EmployeeCourseID": 54,
          "EmployeeID": 21,
          "CourseID": 2,
          "isComplete": false,
          "Course": null,
          "Employee": {
              "$ref": "61"
          }
      },
      {
          "$id": "64",
          "EmployeeCourseID": 55,
          "EmployeeID": 21,
          "CourseID": 4,
          "isComplete": true,
          "Course": null,
          "Employee": {
              "$ref": "61"
          }
      },
      {
          "$id": "65",
          "EmployeeCourseID": 56,
          "EmployeeID": 21,
          "CourseID": 5,
          "isComplete": false,
          "Course": null,
          "Employee": {
              "$ref": "61"
          }
      }
    ],
    "isShowCourses": false
},
{
    "$id": "66",
    "EmployeeID": 22,
    "HireDate": "2013-12-15T00:00:00",
    "Name": "Sweeney Holtzclaw",
    "EmployeeCourses": [
      {
          "$id": "67",
          "EmployeeCourseID": 57,
          "EmployeeID": 22,
          "CourseID": 1,
          "isComplete": true,
          "Course": null,
          "Employee": {
              "$ref": "66"
          }
      },
      {
          "$id": "68",
          "EmployeeCourseID": 58,
          "EmployeeID": 22,
          "CourseID": 2,
          "isComplete": false,
          "Course": null,
          "Employee": {
              "$ref": "66"
          }
      },
      {
          "$id": "69",
          "EmployeeCourseID": 59,
          "EmployeeID": 22,
          "CourseID": 3,
          "isComplete": false,
          "Course": null,
          "Employee": {
              "$ref": "66"
          }
      },
      {
          "$id": "70",
          "EmployeeCourseID": 60,
          "EmployeeID": 22,
          "CourseID": 5,
          "isComplete": false,
          "Course": null,
          "Employee": {
              "$ref": "66"
          }
      }
    ],
    "isShowCourses": false
},
{
    "$id": "71",
    "EmployeeID": 23,
    "HireDate": "2013-12-15T00:00:00",
    "Name": "Sana Shing",
    "EmployeeCourses": [
      {
          "$id": "72",
          "EmployeeCourseID": 61,
          "EmployeeID": 23,
          "CourseID": 2,
          "isComplete": false,
          "Course": null,
          "Employee": {
              "$ref": "71"
          }
      },
      {
          "$id": "73",
          "EmployeeCourseID": 62,
          "EmployeeID": 23,
          "CourseID": 4,
          "isComplete": false,
          "Course": null,
          "Employee": {
              "$ref": "71"
          }
      },
      {
          "$id": "74",
          "EmployeeCourseID": 63,
          "EmployeeID": 23,
          "CourseID": 5,
          "isComplete": true,
          "Course": null,
          "Employee": {
              "$ref": "71"
          }
      },
      {
          "$id": "75",
          "EmployeeCourseID": 64,
          "EmployeeID": 23,
          "CourseID": 6,
          "isComplete": false,
          "Course": null,
          "Employee": {
              "$ref": "71"
          }
      }
    ],
    "isShowCourses": false
},
{
    "$id": "76",
    "EmployeeID": 24,
    "HireDate": "2013-12-15T00:00:00",
    "Name": "Laila Marchant",
    "EmployeeCourses": [
      {
          "$id": "77",
          "EmployeeCourseID": 102,
          "EmployeeID": 24,
          "CourseID": 1,
          "isComplete": false,
          "Course": null,
          "Employee": {
              "$ref": "76"
          }
      },
      {
          "$id": "78",
          "EmployeeCourseID": 103,
          "EmployeeID": 24,
          "CourseID": 2,
          "isComplete": false,
          "Course": null,
          "Employee": {
              "$ref": "76"
          }
      },
      {
          "$id": "79",
          "EmployeeCourseID": 104,
          "EmployeeID": 24,
          "CourseID": 3,
          "isComplete": false,
          "Course": null,
          "Employee": {
              "$ref": "76"
          }
      },
      {
          "$id": "80",
          "EmployeeCourseID": 105,
          "EmployeeID": 24,
          "CourseID": 4,
          "isComplete": false,
          "Course": null,
          "Employee": {
              "$ref": "76"
          }
      }
    ],
    "isShowCourses": false
},
{
    "$id": "81",
    "EmployeeID": 25,
    "HireDate": "2013-12-15T00:00:00",
    "Name": "Ravi Vijay",
    "EmployeeCourses": [
      {
          "$id": "82",
          "EmployeeCourseID": 69,
          "EmployeeID": 25,
          "CourseID": 1,
          "isComplete": false,
          "Course": null,
          "Employee": {
              "$ref": "81"
          }
      },
      {
          "$id": "83",
          "EmployeeCourseID": 70,
          "EmployeeID": 25,
          "CourseID": 2,
          "isComplete": true,
          "Course": null,
          "Employee": {
              "$ref": "81"
          }
      },
      {
          "$id": "84",
          "EmployeeCourseID": 71,
          "EmployeeID": 25,
          "CourseID": 5,
          "isComplete": false,
          "Course": null,
          "Employee": {
              "$ref": "81"
          }
      },
      {
          "$id": "85",
          "EmployeeCourseID": 72,
          "EmployeeID": 25,
          "CourseID": 6,
          "isComplete": false,
          "Course": null,
          "Employee": {
              "$ref": "81"
          }
      }
    ],
    "isShowCourses": false
},
{
    "$id": "86",
    "EmployeeID": 26,
    "HireDate": "2013-12-24T00:00:00",
    "Name": "Haresh Makadiya",
    "EmployeeCourses": [
      {
          "$id": "87",
          "EmployeeCourseID": 95,
          "EmployeeID": 26,
          "CourseID": 3,
          "isComplete": false,
          "Course": null,
          "Employee": {
              "$ref": "86"
          }
      },
      {
          "$id": "88",
          "EmployeeCourseID": 96,
          "EmployeeID": 26,
          "CourseID": 4,
          "isComplete": false,
          "Course": null,
          "Employee": {
              "$ref": "86"
          }
      },
      {
          "$id": "89",
          "EmployeeCourseID": 97,
          "EmployeeID": 26,
          "CourseID": 5,
          "isComplete": false,
          "Course": null,
          "Employee": {
              "$ref": "86"
          }
      },
      {
          "$id": "90",
          "EmployeeCourseID": 98,
          "EmployeeID": 26,
          "CourseID": 6,
          "isComplete": false,
          "Course": null,
          "Employee": {
              "$ref": "86"
          }
      }
    ],
    "isShowCourses": false
},
{
    "$id": "91",
    "EmployeeID": 27,
    "HireDate": "2000-09-08T00:00:00",
    "Name": "Rekha Chatbar",
    "EmployeeCourses": [
      {
          "$id": "92",
          "EmployeeCourseID": 152,
          "EmployeeID": 27,
          "CourseID": 1,
          "isComplete": true,
          "Course": null,
          "Employee": {
              "$ref": "91"
          }
      },
      {
          "$id": "93",
          "EmployeeCourseID": 153,
          "EmployeeID": 27,
          "CourseID": 2,
          "isComplete": true,
          "Course": null,
          "Employee": {
              "$ref": "91"
          }
      },
      {
          "$id": "94",
          "EmployeeCourseID": 154,
          "EmployeeID": 27,
          "CourseID": 3,
          "isComplete": true,
          "Course": null,
          "Employee": {
              "$ref": "91"
          }
      },
      {
          "$id": "95",
          "EmployeeCourseID": 155,
          "EmployeeID": 27,
          "CourseID": 6,
          "isComplete": true,
          "Course": null,
          "Employee": {
              "$ref": "91"
          }
      }
    ],
    "isShowCourses": false
}
];


            getCourses();
            getEmployees();


       
        }]);
