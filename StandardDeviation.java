import java.util.*;

/**
*StandardDeviation.java
*Part of Daily Challenge 214
*Finds the standard deviation of a given set of integers
*/
public class StandardDeviation{
	
	public static void main(String[] args){
		StandardDeviation sDev = new StandardDeviation();
		System.out.format("The standard deviation is: %.3f", sDev.findSDev());
		System.exit(0);
	}
	
	private static String input;
	private static String[] parsedInput;
	private static double[] vals;
	
	public StandardDeviation(){
		//Accept user input
		Scanner keyboard = new Scanner(System.in);
		System.out.println("Enter integers separated by spaces: ");
		
		//Initialize input as single string
		input = keyboard.nextLine();
		//Parse input to String[]
		parsedInput = input.split(" ");
		//Parse input to int[]
		vals = new double[parsedInput.length];
		for (int i = 0; i < vals.length; i++)
			vals[i] = Double.parseDouble(parsedInput[i]);
	}
	
	public double findSDev(){
		double valsSum = 0.0;
		double mean = 0.0;
		double[] difference = new double[vals.length];
		double differenceSum = 0.0;
		double variance = 0.0;
		
		for (int i = 0; i < vals.length; i++)
			valsSum += vals[i];
		
		mean = valsSum / vals.length;
		
		for (int j = 0; j < vals.length; j++)
			difference[j] = Math.pow((vals[j] - mean),2);
		
		for (int k = 0; k < difference.length; k++)
			differenceSum += difference[k];
		
		variance = differenceSum / difference.length;
		
		return Math.sqrt(variance);
	}
}