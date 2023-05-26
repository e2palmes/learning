package org.example.dsa;

import java.util.Arrays;
import java.util.Scanner;

public class WorkingWith2DArrays {
    public static void main(String[] args) {
        char[][] board = new char[3][3];
        for (int col = 0; col < 3; col++ ){
            for (int line = 0; line < 3; line++){
                board[line][col] = '-';
            }
        }

        System.out.println("Precisez la ligne sur laquelle vous souhaitez jouer: ligne colonne\n");
        System.out.println("ex: 3 2 (ligne 3 colonne 2)");

        Scanner scanner = new Scanner(System.in);
        int line = scanner.nextInt();
        int col = scanner.nextInt();

        board[line-1][col-1] = '0';

        System.out.println(Arrays.deepToString(board));
    }


    public static String checkWinner(){
        return "";
    }

    public static String printBoard(){
        return "";
    }
}
