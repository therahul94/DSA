package Pattern;

import java.util.Scanner;

public class Pattern12 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        scan.close();

        int a = 0, b = 1;
        for(int i = 0; i < n; i ++) {
            for(int j = 0; j <= i; j ++) {
                System.out.print(a + "\t");
                int c = a+b;
                a = b;
                b = c;
            }
            System.out.println();
        }
    }
}
