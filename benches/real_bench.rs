#[cfg(test)]
mod bench {
	use test::Bencher;
	use basic_dsp::{
		DataVector,
        DataVectorDomain,
        GenericVectorOperations,
		RealVectorOperations,
		DataVector32,
		RealTimeVector32,
        RealTimeVector64,
        Operation};
	use num::complex::Complex32;
    use tools::{VectorBox, DEFAULT_DATA_SIZE, Size};
	
    #[inline(never)]
	pub fn add_offset_reference32(mut array: Vec<f32>, offset: f32) -> Vec<f32>
	{
		let mut i = 0;
		while i < array.len()
		{
			array[i] = array[i] + offset;
			i += 1;
		}
        
        array
	}
    
    #[inline(never)]
	pub fn add_offset_reference64(mut array: Vec<f64>, offset: f64) -> Vec<f64>
	{
		let mut i = 0;
		while i < array.len()
		{
			array[i] = array[i] + offset;
			i += 1;
		}
        
        array
	}
	
	#[bench]
	fn real_offset_32s_reference(b: &mut Bencher)
	{
        let mut vector = VectorBox::<Vec<f32>>::new(Size::Small);
		b.iter(|| {
			vector.execute(|v|  { add_offset_reference32(v, 100.0) } )
			});
	}
    
    #[bench]
	fn real_offset_64s_reference(b: &mut Bencher)
	{
        let mut vector = VectorBox::<Vec<f64>>::new(Size::Small);
		b.iter(|| {
			vector.execute(|v|  { add_offset_reference64(v, 100.0) } )
			});
	}
	
	#[bench]
	fn vector_creation_32_benchmark(b: &mut Bencher)
	{
		b.iter(|| {
			let data = vec![0.0; DEFAULT_DATA_SIZE];
			let result = DataVector32::from_array_no_copy(false, DataVectorDomain::Time, data);
			return result.delta();;
			});
	}
	
	#[bench]
	fn multi_operations_vector_32_benchmark(b: &mut Bencher)
	{
		let mut vector = VectorBox::<DataVector32>::new(Size::Small, true);
		b.iter(|| {
			vector.execute(|v|  
				{
					  v.perform_operations(
						&[Operation::AddReal(1.0),
						Operation::AddComplex(Complex32::new(1.0, 1.0)),
						Operation::MultiplyComplex(Complex32::new(-1.0, 1.0))])
				})
		});
	}
    
    #[bench]
	fn real_offset_32s_benchmark(b: &mut Bencher)
	{
		let mut vector = VectorBox::<RealTimeVector32>::new(Size::Small);
		b.iter(|| {
			vector.execute_res(|v|  { v.real_offset(100.0) } )
		});
	}
    
    #[bench]
	fn real_offset_32m_benchmark(b: &mut Bencher)
	{
		let mut vector = VectorBox::<RealTimeVector32>::new(Size::Medium);
		b.iter(|| {
			vector.execute_res(|v|  { v.real_offset(100.0) } )
		});
	}
    
    #[bench]
	fn real_offset_32l_benchmark(b: &mut Bencher)
	{
		let mut vector = VectorBox::<RealTimeVector32>::new(Size::Large);
		b.iter(|| {
			vector.execute_res(|v|  { v.real_offset(100.0) } )
		});
	}
    
    #[bench]
	fn real_offset_64s_benchmark(b: &mut Bencher)
	{
		let mut vector = VectorBox::<RealTimeVector64>::new(Size::Small);
		b.iter(|| {
			vector.execute_res(|v|  { v.real_offset(100.0) } )
		});
	}
    
    #[bench]
	fn real_scale_32m_benchmark(b: &mut Bencher)
	{
		let mut vector = VectorBox::<RealTimeVector32>::new(Size::Medium);
		b.iter(|| {
			vector.execute_res(|v|  { v.real_scale(2.0) } )
		});
	}
    
    #[bench]
	fn real_abs_32s_benchmark(b: &mut Bencher)
	{
		let mut vector = VectorBox::<RealTimeVector32>::new(Size::Small);
		b.iter(|| {
			vector.execute_res(|v|  { v.abs() } )
		});
    }
    
    #[bench]
	fn real_square_32s_benchmark(b: &mut Bencher)
	{
		let mut vector = VectorBox::<RealTimeVector32>::new(Size::Small);
		b.iter(|| {
			vector.execute_res(|v|  { v.square() } )
		});
    }
    
    #[bench]
	fn real_root_32s_benchmark(b: &mut Bencher)
	{
		let mut vector = VectorBox::<RealTimeVector32>::new(Size::Small);
		b.iter(|| {
			vector.execute_res(|v|  { v.root(3.0) } )
		});
    }
    
    #[bench]
	fn real_power_32s_benchmark(b: &mut Bencher)
	{
		let mut vector = VectorBox::<RealTimeVector32>::new(Size::Small);
		b.iter(|| {
			vector.execute_res(|v|  { v.power(3.0) } )
		});
    }
    
    #[bench]
	fn real_logn_32s_benchmark(b: &mut Bencher)
	{
		let mut vector = VectorBox::<RealTimeVector32>::new(Size::Small);
		b.iter(|| {
			vector.execute_res(|v|  { v.logn() } )
		});
    }
    
    #[bench]
	fn real_logn_32m_benchmark(b: &mut Bencher)
	{
		let mut vector = VectorBox::<RealTimeVector32>::new(Size::Medium);
		b.iter(|| {
			vector.execute_res(|v|  { v.logn() } )
		});
    }
    
    #[bench]
	fn real_logn_32l_benchmark(b: &mut Bencher)
	{
		let mut vector = VectorBox::<RealTimeVector32>::new(Size::Large);
		b.iter(|| {
			vector.execute_res(|v|  { v.logn() } )
		});
    }
    
    #[bench]
	fn real_expn_32s_benchmark(b: &mut Bencher)
	{
		let mut vector = VectorBox::<RealTimeVector32>::new(Size::Small);
		b.iter(|| {
			vector.execute_res(|v|  { v.expn() } )
		});
    }
    
    #[bench]
	fn wrap_32s_benchmark(b: &mut Bencher)
	{
		let mut vector = VectorBox::<RealTimeVector32>::new(Size::Small);
		b.iter(|| {
			vector.execute_res(|v|  { v.wrap(10.0) } )
		});
    }
    
    #[bench]
	fn unwrap_32s_benchmark(b: &mut Bencher)
	{
		let mut vector = VectorBox::<RealTimeVector32>::new(Size::Small);
		b.iter(|| {
			vector.execute_res(|v|  { v.unwrap(10.0) } )
		});
    }
    
    #[bench]
	fn diff_benchmark(b: &mut Bencher)
	{
		let mut vector = VectorBox::<RealTimeVector32>::new(Size::Small);
		b.iter(|| {
			vector.execute_res(|v|  { v.diff_with_start() } )
		});
    }
    
    #[bench]
	fn cum_sum_benchmark(b: &mut Bencher)
	{
		let mut vector = VectorBox::<RealTimeVector32>::new(Size::Small);
		b.iter(|| {
			vector.execute_res(|v|  { v.cum_sum() } )
		});
    }
    
    #[bench]
	fn real_vector_multiplication_32s_benchmark(b: &mut Bencher)
	{
		let mut vector = VectorBox::<RealTimeVector32>::new(Size::Small);
		b.iter(|| {
			vector.execute_res(|v| {
                let len = v.len(); 
                let operand = RealTimeVector32::from_constant(0.0, len);
                v.multiply_vector(&operand) 
            } )
		});
	}
}