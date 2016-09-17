use RealNumber;
use multicore_support::Complexity;
use super::{
    DspVec,
    ToSliceMut,
    NumberSpace,
    Domain};
/// Trigonometry methods.
pub trait TrigOps {
    /// Calculates the sine of each element in radians.
    ///
    /// # Example
    ///
    /// ```
    /// use std::f32;
    /// use basic_dsp_vector::vector_types2::*;
    /// let mut vector = vec!(f32::consts::PI/2.0, -f32::consts::PI/2.0).to_real_time_vec();
    /// vector.sin();
    /// assert_eq!([1.0, -1.0], vector[..]);
    /// ```
    fn sin(&mut self);

    /// Calculates the cosine of each element in radians.
    ///
    /// # Example
    ///
    /// ```
    /// use std::f32;
    /// use basic_dsp_vector::vector_types2::*;
    /// let mut vector = vec!(2.0 * f32::consts::PI, f32::consts::PI).to_real_time_vec();
    /// vector.cos();
    /// assert_eq!([1.0, -1.0], vector[..]);
    /// ```
    fn cos(&mut self);

    /// Calculates the tangent of each element in radians.
    fn tan(&mut self);

    /// Calculates the principal value of the inverse sine of each element in radians.
    fn asin(&mut self);

    /// Calculates the principal value of the inverse cosine of each element in radians.
    fn acos(&mut self);

    /// Calculates the principal value of the inverse tangent of each element in radians.
    fn atan(&mut self);

    /// Calculates the hyperbolic sine each element in radians.
    fn sinh(&mut self);

    /// Calculates the hyperbolic cosine each element in radians.
    fn cosh(&mut self);

    /// Calculates the hyperbolic tangent each element in radians.
    fn tanh(&mut self);

    /// Calculates the principal value of the inverse hyperbolic sine of each element in radians.
    fn asinh(&mut self);

    /// Calculates the principal value of the inverse hyperbolic cosine of each element in radians.
    fn acosh(&mut self);

    /// Calculates the principal value of the inverse hyperbolic tangent of each element in radians.
    fn atanh(&mut self);
}

const TRIG_COMPLEXITY: Complexity = Complexity::Small;

impl<S, T, N, D> TrigOps for DspVec<S, T, N, D>
    where
        S: ToSliceMut<T>,
        T: RealNumber,
        N: NumberSpace,
        D: Domain {
    fn sin(&mut self) {
        if self.is_complex() {
            self.pure_complex_operation(|v, _| v.sin(), (), TRIG_COMPLEXITY);
        } else {
            self.pure_real_operation(|v, _| v.sin(), (), TRIG_COMPLEXITY);
        }
    }

    fn cos(&mut self) {
        if self.is_complex() {
            self.pure_complex_operation(|v, _| v.cos(), (), TRIG_COMPLEXITY);
        } else {
            self.pure_real_operation(|v, _| v.cos(), (), TRIG_COMPLEXITY);
        }
    }

    fn tan(&mut self) {
        if self.is_complex() {
            self.pure_complex_operation(|v, _| v.tan(), (), TRIG_COMPLEXITY);
        } else {
            self.pure_real_operation(|v, _| v.tan(), (), TRIG_COMPLEXITY);
        }
    }

    fn asin(&mut self) {
        if self.is_complex() {
            self.pure_complex_operation(|v, _| v.asin(), (), TRIG_COMPLEXITY);
        } else {
            self.pure_real_operation(|v, _| v.asin(), (), TRIG_COMPLEXITY);
        }
    }

    fn acos(&mut self) {
        if self.is_complex() {
            self.pure_complex_operation(|v, _| v.acos(), (), TRIG_COMPLEXITY);
        } else {
            self.pure_real_operation(|v, _| v.acos(), (), TRIG_COMPLEXITY);
        }
    }

    fn atan(&mut self) {
        if self.is_complex() {
            self.pure_complex_operation(|v, _| v.atan(), (), TRIG_COMPLEXITY);
        } else {
            self.pure_real_operation(|v, _| v.atan(), (), TRIG_COMPLEXITY);
        }
    }

    fn sinh(&mut self) {
        if self.is_complex() {
            self.pure_complex_operation(|v, _| v.sinh(), (), TRIG_COMPLEXITY);
        } else {
            self.pure_real_operation(|v, _| v.sinh(), (), TRIG_COMPLEXITY);
        }
    }

    fn cosh(&mut self) {
        if self.is_complex() {
            self.pure_complex_operation(|v, _| v.cosh(), (), TRIG_COMPLEXITY);
        } else {
            self.pure_real_operation(|v, _| v.cosh(), (), TRIG_COMPLEXITY);
        }
    }

    fn tanh(&mut self) {
        if self.is_complex() {
            self.pure_complex_operation(|v, _| v.tanh(), (), TRIG_COMPLEXITY);
        } else {
            self.pure_real_operation(|v, _| v.tanh(), (), TRIG_COMPLEXITY);
        }
    }

    fn asinh(&mut self) {
        if self.is_complex() {
            self.pure_complex_operation(|v, _| v.asinh(), (), TRIG_COMPLEXITY);
        } else {
            self.pure_real_operation(|v, _| v.asinh(), (), TRIG_COMPLEXITY);
        }
    }

    fn acosh(&mut self) {
        if self.is_complex() {
            self.pure_complex_operation(|v, _| v.acosh(), (), TRIG_COMPLEXITY);
        } else {
            self.pure_real_operation(|v, _| v.acosh(), (), TRIG_COMPLEXITY);
        }
    }

    fn atanh(&mut self) {
        if self.is_complex() {
            self.pure_complex_operation(|v, _| v.atanh(), (), TRIG_COMPLEXITY);
        } else {
            self.pure_real_operation(|v, _| v.atanh(), (), TRIG_COMPLEXITY);
        }
    }
}