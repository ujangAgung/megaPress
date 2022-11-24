<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use Illuminate\Http\Request;
use App\Http\Requests\StoreCategoriesRequest;
use App\Http\Requests\UpdateCategoriesRequest;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Inertia\Inertia;

class CategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Admin/Kategori', [
            'title' => 'Kategori',
            'auth' => auth()->user(),
            'kategori' => Categories::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/TambahKategori', [
            'title' => 'Tambah Kategori',
            'auth' => auth()->user(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCategoriesRequest $request)
    {
        $categories = new Categories();
        $categories->deskripsi = $request->deskripsi;
        $categories->slug = Str::slug($request->deskripsi, '-');
        $categories->save();

        return Redirect::route('admin.kategori');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Categories  $categories
     * @return \Illuminate\Http\Response
     */
    public function show(Categories $categories)
    {
        return Inertia::render('Admin/ShowKategori');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Categories  $categories
     * @return \Illuminate\Http\Response
     */
    public function edit(Categories $categories, $slug)
    {
        // $acakan = new Categories();
        // dd($acakan);
        // $datas =  Categories::where('slug', $slug)->first();
        // return Inertia::render('Admin/editKategori', [
        //     'title' => 'Edit Kategori',
        //     'datas' => $datas
        // ]);
        $kategori = [
            'title' => "Edit Kategori",
            'categories' => Categories::where('slug', $slug)->first(),
            'auth' => auth()->user(),
        ];

        return Inertia::render('Admin/editKategori', ['kategori' => $kategori]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Categories  $categories
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCategoriesRequest $request, Categories $categories)
    {
        // $request->validate([
        //     'deskripsi' => 'required'
        // ]);

        // Categories::where('id' , $request->id)->update([
        //     'deskripsi' => $request->deskripsi,
        //     'slug' => Str::slug($request->deskripsi, '-')
        // ]);

        // return Redirect::route('admin.kategori');
        dd($request);
        // $categories->update(
        //     'slug' =>
        //     $request->validated()
        // );

        return Redirect::route('admin.kategori')->with('success', 'Organization updated.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Categories  $categories
     * @return \Illuminate\Http\Response
     */
    public function destroy(Categories $categories)
    {
        $categories->delete();
        return Redirect::route('admin.kategori')->with('message', 'Kategori Dihapus.');
    }
}
