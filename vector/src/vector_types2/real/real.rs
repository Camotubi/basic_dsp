pub trait RealOps {
	/// Gets the absolute value of all vector elements.
    /// # Example
    ///
    /// ```
    /// use basic_dsp_vector::{RealTimeVector32, RealVectorOps, DataVec, RealIndex};
    /// let vector = RealTimeVector32::from_array(&[1.0, -2.0]);
    /// let result = vector.abs().expect("Ignoring error handling in examples");
    /// assert_eq!([1.0, 2.0], result.real(0..));
    /// ```
    fn abs(self) -> TransRes<Self>;

	/// Each value in the vector is dividable by the divisor and the remainder is stored in the resulting
    /// vector. This the same a modulo operation or to phase wrapping.
    ///
    /// # Example
    ///
    /// ```
    /// use basic_dsp_vector::{RealTimeVector32, RealVectorOps, DataVec, RealIndex};
    /// let vector = RealTimeVector32::from_array(&[1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0]);
    /// let result = vector.wrap(4.0).expect("Ignoring error handling in examples");
    /// assert_eq!([1.0, 2.0, 3.0, 0.0, 1.0, 2.0, 3.0, 0.0], result.real(0..));
    /// ```
    fn wrap(self, divisor: T) -> TransRes<Self>;

    /// This function corrects the jumps in the given vector which occur due to wrap or modulo operations.
    /// This will undo a wrap operation only if the deltas are smaller than half the divisor.
    ///
    /// # Example
    ///
    /// ```
    /// use basic_dsp_vector::{RealTimeVector32, RealVectorOps, DataVec, RealIndex};
    /// let vector = RealTimeVector32::from_array(&[1.0, 2.0, 3.0, 0.0, 1.0, 2.0, 3.0, 0.0]);
    /// let result = vector.unwrap(4.0).expect("Ignoring error handling in examples");
    /// assert_eq!([1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0], result.real(0..));
    /// ```
    fn unwrap(self, divisor: T) -> TransRes<Self>;
}