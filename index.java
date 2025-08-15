// import java.util.Scanner;

// public class index {

//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);

//         System.out.println("Enter month number (1-12):");
//         int month = sc.nextInt();

//         System.out.println("Enter the year:");
//         int year = sc.nextInt();

//         boolean isLeap = ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0));

//         if (isLeap) {
//             System.out.println("Leap year");
//         } else {
//             System.out.println("Not a leap year");
//         }

//         switch (month) {
//             case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//                 System.out.println("Month has 31 .");
//                 break;
//             case 4: case 6: case 9: case 11:
//                 System.out.println("Month has 30 .");
//                 break;
//             case 2:
//                 if (isLeap) {
//                     System.out.println("Month has 29 .");
//                 } else {
//                     System.out.println("Month has 28 .");
//                 }
//                 break;
//             default:
//                 System.out.println("Invalid month number!");
//         }

//     }
// }


// public class index {

//     public static void main(String[] args) {
//         int i=10;
//         while (i++<=10) {
//             i++;
            
//         }
//         System.out.println(i);
//     }
// }


// public class index {

//     public static void main(String[] args) {
//         int o=3;
//         while (o>4) 
//         System.out.println("hello");
//         System.out.println("java");
//     }
// }


// public class index {

//     public static void main(String[] args) {
//         int a =1;
//         while (a<4) {
//             System.out.println(a);
//             a++;
//         }
//     }
// }


// public class index {

//     public static void main(String[] args) {
//         int i=0;
//         int k=0;
//         while (i<5) {
//             System.out.println(k);
//             ++k;
//         }
//     }
// }


// public class index {

//     public static void main(String[] args) {
//         while (true) {
//             System.out.println("hello");

//         }
//         System.out.println("hii");
//     }
// }

// public class index {

//     public static void main(String[] args) {
//         int a =4;
//         while (a>0) {
//             System.out.println(a+" ");
//             a--;
//         }
//     }
// }


// public class index {

//     public static void main(String[] args) {
//         int x =-5;
//         while (x<0) {
//             x++;
//             System.out.println(x);
//         }
//     }
// }

// public class index {

//     public static void main(String[] args) {
//         int i=0;
//         int k=0;
//         while (i<5) {
//             i--;
//             i+=2;
//             ++k;
//         }
//         System.out.println(k);
//     }
// }


// public class index {

//     public static void main(String[] args) {
//         int age=20;
//         do{
//             age++;
//         }
//         while(age<20);
//         System.out.println(age);
//     }
// }

public class index {

    public static void main(String[] args) {
        do{
            System.out.println("Hello");
        }
        while(false);
        System.out.println("hi");
    }
}