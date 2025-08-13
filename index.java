import java.util.Scanner;

public class index {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter month number (1-12):");
        int month = sc.nextInt();

        System.out.println("Enter the year:");
        int year = sc.nextInt();

        boolean isLeap = ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0));

        if (isLeap) {
            System.out.println("Leap year");
        } else {
            System.out.println("Not a leap year");
        }

        switch (month) {
            case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                System.out.println("Month has 31 .");
                break;
            case 4: case 6: case 9: case 11:
                System.out.println("Month has 30 .");
                break;
            case 2:
                if (isLeap) {
                    System.out.println("Month has 29 .");
                } else {
                    System.out.println("Month has 28 .");
                }
                break;
            default:
                System.out.println("Invalid month number!");
        }

    }
}
