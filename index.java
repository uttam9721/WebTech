class index {
    public static void main(String[] args) {
        int arr[] = {10, 20, 30};
        int i = 0, J = arr.length - 1;
        
        while (i < J) {
            int temp = arr[J];
            arr[J] = arr[i];
            arr[i] = temp;
            i++;
            J--;
        }
        
        // Print final reversed array
        for (int k = 0; k < arr.length; k++) {
            System.out.print(arr[k] + " ");
        }
    }
}
