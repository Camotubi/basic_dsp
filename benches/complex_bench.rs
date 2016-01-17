#[cfg(test)]
mod bench {
	use test::Bencher;
	use basic_dsp::{
        DataVector,
        GenericVectorOperations,
		ComplexVectorOperations,
		ComplexTimeVector32,
        Convolution,
        VectorConvolution};
	use num::complex::Complex32;
    use tools::{VectorBox, Size};
    use basic_dsp::conv_types::*;
    
    #[bench]
	fn complex_offset_32s_benchmark(b: &mut Bencher)
	{
		let mut vector = VectorBox::<ComplexTimeVector32>::new(Size::Small);
		b.iter(|| {
			vector.execute_res(|v|  { v.complex_offset(Complex32::new(2.0, -5.0)) } )
		});
	}
	
	#[bench]
	fn complex_scale_32s_benchmark(b: &mut Bencher)
	{
		let mut vector = VectorBox::<ComplexTimeVector32>::new(Size::Small);
		b.iter(|| {
			vector.execute_res(|v|  { v.complex_scale(Complex32::new(-2.0, 2.0)) } )
		});
	}
    
    #[bench]
	fn complex_conj_32s_benchmark(b: &mut Bencher)
	{
		let mut vector = VectorBox::<ComplexTimeVector32>::new(Size::Small);
		b.iter(|| {
			vector.execute_res(|v|  { v.complex_conj() } )
		});
	}
    
    #[bench]
	fn complex_vector_multiplication_32s_benchmark(b: &mut Bencher)
	{
		let mut vector = VectorBox::<ComplexTimeVector32>::new(Size::Small);
		b.iter(|| {
			vector.execute_res(|v| {
                let len = v.points(); 
                let operand = ComplexTimeVector32::from_constant(Complex32::new(0.0, 0.0), len);
                v.multiply_vector(&operand) 
            } )
		});
	}
    
    #[bench]
	fn convolve_vector_with_signal_32t_benchmark(b: &mut Bencher)
	{
		let mut vector = VectorBox::<ComplexTimeVector32>::new(Size::Tiny);
		b.iter(|| {
			vector.execute_res(|v| {
                let sinc: SincFunction<f32> = SincFunction::new();
                let table = RealTimeLinearTableLookup::<f32>::from_conv_function(&sinc as &RealImpulseResponse<f32>, 0.2, 5);
                v.convolve(&table as &RealImpulseResponse<f32>, 0.5, 10)
            } )
		});
	}
    
    #[bench]
	fn convolve_vector_with_vector_32s_benchmark(b: &mut Bencher)
	{
		let mut vector = VectorBox::<ComplexTimeVector32>::new(Size::Small);
		b.iter(|| {
			vector.execute_res(|v| {
                let len = v.points(); 
                let operand = ComplexTimeVector32::from_constant(Complex32::new(0.0, 0.0), len);
                v.convolve_vector(&operand) 
            } )
		});
	}
}